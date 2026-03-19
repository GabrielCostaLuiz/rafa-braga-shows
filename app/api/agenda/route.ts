import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "rafabraga_db");
    const collection = db.collection("agenda");
    
    const shows = await collection.find({ active: { $ne: false } }).sort({ date: 1 }).toArray();
    
    return NextResponse.json(shows.map(s => ({
      id: s._id.toString(),
      date: s.date || "",
      event: s.event || s.title || "",
      city: s.city || "",
      time: s.time || ""
    })));
  } catch (error) {
    console.error("Erro na API da Agenda:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "rafabraga_db");
    const collection = db.collection("agenda");
    
    const result = await collection.insertOne({
      ...body,
      active: true,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    
    return NextResponse.json({ success: true, id: result.insertedId.toString() });
  } catch (error) {
    console.error("Erro na API da Agenda (POST):", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "rafabraga_db");
    const collection = db.collection("agenda");
    
    const { id: _, ...updateData } = body;
    
    // Simplificando o filtro de ID para Next.js (importar ObjectId se necessário)
    const { ObjectId } = require("mongodb");
    
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...updateData, updatedAt: new Date() } }
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro na API da Agenda (PUT):", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ error: "ID is required" }, { status: 400 });

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || "rafabraga_db");
    const collection = db.collection("agenda");
    
    const { ObjectId } = require("mongodb");
    
    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { active: false, updatedAt: new Date() } }
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro na API da Agenda (DELETE):", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
