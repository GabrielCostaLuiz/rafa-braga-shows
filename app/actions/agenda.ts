"use server";

import { getCollection } from "@/lib/mongodb";

export async function getShows() {
  try {
    const collection = await getCollection("agenda");

    // Buscando apenas shows ativos
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Considera hoje como dia inteiro

    const showsData = await collection.find({ 
      active: { $ne: false },
      $or: [
        { fullDate: { $exists: false } }, 
        { fullDate: { $gte: now.toISOString() } }
      ]
    }).sort({ fullDate: 1 }).toArray();

    return showsData.map((show) => ({
      _id: show._id?.toString(),
      date: (show.date as string) || "",
      weekday: (show.weekday as string) || "",
      month: (show.month as string) || "",
      title: (show.title as string) || "",
      venue: (show.venue as string) || "",
      city: (show.city as string) || "",
      time: (show.time as string) || "",
    }));
  } catch (error) {
    console.error("Erro ao buscar agenda:", error);
    return [];
  }
}
