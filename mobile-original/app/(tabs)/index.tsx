import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, FileText, ChevronRight, TrendingUp, Users, Clock, MapPin } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const nextShows = [
    { id: 1, local: 'Vitória Pub', date: 'Hoje, 22:00', city: 'São Paulo' },
    { id: 2, local: 'Arena Music', date: 'Sexta, 23:30', city: 'Curitiba' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerSubtitle}>Bem-vindo de volta,</Text>
          <Text style={styles.headerTitle}>RAFA BRAGA</Text>
        </View>

        {/* Stats Grid - Premium Cards */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <View style={styles.statIconHeader}>
              <TrendingUp size={16} color="#EF4444" />
              <Text style={styles.statLabel}>Leads / Mês</Text>
            </View>
            <Text style={styles.statValue}>48</Text>
            <Text style={styles.statTrend}>+12% que set.</Text>
          </View>
          
          <View style={[styles.statCard, { backgroundColor: 'rgba(239, 68, 68, 0.05)', borderColor: 'rgba(239, 68, 68, 0.2)' }]}>
            <View style={styles.statIconHeader}>
              <Users size={16} color="#EF4444" />
              <Text style={styles.statLabel}>Novos Leads</Text>
            </View>
            <Text style={[styles.statValue, { color: '#EF4444' }]}>03</Text>
            <Text style={styles.statTrend}>Aguardando retorno</Text>
          </View>
        </View>

        {/* Próximos Compromissos - New Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Próximos Shows</Text>
            <TouchableOpacity onPress={() => router.push('/agenda')}>
               <Text style={styles.seeAllText}>Ver Agenda</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.appointmentList}>
             {nextShows.map((show) => (
                <TouchableOpacity key={show.id} style={styles.appointmentCard} activeOpacity={0.7} onPress={() => router.push('/agenda')}>
                   <View style={styles.appointmentTime}>
                      <Clock size={14} color="#EF4444" />
                      <Text style={styles.timeText}>{show.date}</Text>
                   </View>
                   <Text style={styles.appointmentLocal}>{show.local}</Text>
                   <View style={styles.appointmentCity}>
                      <MapPin size={12} color="rgba(255,255,255,0.3)" />
                      <Text style={styles.cityText}>{show.city}</Text>
                   </View>
                </TouchableOpacity>
             ))}
          </View>
        </View>

        {/* Quick Links / Shortcuts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ação Rápida</Text>
          <View style={styles.shortcutsGrid}>
            <TouchableOpacity 
              style={[styles.shortcutBtn, { backgroundColor: '#EF4444' }]} 
              onPress={() => router.push('/agenda?action=new_show')}
            >
               <View style={[styles.shortcutIcon, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
                 <Calendar size={22} color="#FFF" />
               </View>
               <Text style={[styles.shortcutLabel, { color: '#FFF' }]}>Nova Data na Agenda</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010101',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  header: {
    marginBottom: 40,
    marginTop: 16,
  },
  headerSubtitle: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    marginBottom: 4,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 40,
    fontFamily: 'Outfit_700Bold',
    textTransform: 'uppercase',
    letterSpacing: -1,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 40,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 28,
    padding: 20,
  },
  statIconHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 12,
  },
  statLabel: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 10,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  statValue: {
    color: '#FFF',
    fontSize: 32,
    fontFamily: 'Outfit_700Bold',
    marginBottom: 4,
  },
  statTrend: {
    color: 'rgba(255, 255, 255, 0.2)',
    fontSize: 10,
    fontFamily: 'Montserrat_400Regular',
  },
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Outfit_700Bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  seeAllText: {
    color: '#EF4444',
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
  },
  appointmentList: {
    gap: 12,
  },
  appointmentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  appointmentTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },
  timeText: {
    color: '#EF4444',
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
  },
  appointmentLocal: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Outfit_700Bold',
    marginBottom: 4,
  },
  appointmentCity: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  cityText: {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: 12,
  },
  shortcutsGrid: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  shortcutBtn: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    padding: 16,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  shortcutIcon: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  shortcutLabel: {
    color: '#FFF',
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
    textTransform: 'uppercase',
  }
});
