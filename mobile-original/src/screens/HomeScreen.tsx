import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { Calendar, FileText, ChevronRight, Music, Users, Star } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#010101]">
      <ScrollView className="px-6 py-8">
        {/* Header */}
        <View className="mb-10 mt-4">
          <Text className="text-white/40 font-montserrat uppercase tracking-[0.3em] text-xs mb-2">Painel Administrativo</Text>
          <Text className="text-white text-4xl font-outfit uppercase tracking-tighter">RAFA BRAGA</Text>
        </View>

        {/* Stats Grid */}
        <View className="flex-row gap-4 mb-8">
          <View className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-5">
            <Text className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Próximos Shows</Text>
            <Text className="text-white text-2xl font-outfit">10</Text>
          </View>
          <View className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-5">
            <Text className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Novos Orçamentos</Text>
            <Text className="text-red-500 text-2xl font-outfit">3</Text>
          </View>
        </View>

        {/* Menu Cards */}
        <View className="gap-4">
          <TouchableOpacity 
            activeOpacity={0.7}
            className="flex-row items-center bg-white/5 border border-white/10 p-6 rounded-[32px]"
          >
            <View className="w-12 h-12 bg-white/10 rounded-2xl items-center justify-center mr-5">
              <Calendar size={24} color="#FFF" />
            </View>
            <View className="flex-1">
              <Text className="text-white text-lg font-bold font-outfit uppercase tracking-tight">Gerenciar Agenda</Text>
              <Text className="text-white/40 text-xs font-montserrat">Datas, locais e horários</Text>
            </View>
            <ChevronRight size={20} color="#FFFFFF33" />
          </TouchableOpacity>

          <TouchableOpacity 
            activeOpacity={0.7}
            className="flex-row items-center bg-white/5 border border-white/10 p-6 rounded-[32px]"
          >
            <View className="w-12 h-12 bg-red-500/10 rounded-2xl items-center justify-center mr-5">
              <FileText size={24} color="#EF4444" />
            </View>
            <View className="flex-1">
              <Text className="text-white text-lg font-bold font-outfit uppercase tracking-tight">Orçamentos</Text>
              <Text className="text-white/40 text-xs font-montserrat">Pedidos e leads recentes</Text>
            </View>
            <ChevronRight size={20} color="#FFFFFF33" />
          </TouchableOpacity>

          <View className="opacity-40">
            <TouchableOpacity 
              activeOpacity={1}
              className="flex-row items-center bg-white/5 border border-white/10 p-6 rounded-[32px]"
            >
              <View className="w-12 h-12 bg-white/10 rounded-2xl items-center justify-center mr-5">
                <Music size={24} color="#FFF" />
              </View>
              <View className="flex-1">
                <Text className="text-white text-lg font-bold font-outfit uppercase tracking-tight">Spotify & Media</Text>
                <Text className="text-white/40 text-xs font-montserrat">Em breve</Text>
              </View>
              <Star size={18} color="#FFFFFF22" fill="#FFFFFF22" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer info */}
        <View className="mt-12 py-8 border-t border-white/5 items-center">
            <Text className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">v1.0.0 Alpha</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
