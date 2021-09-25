import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import _ from '@services/i18n';

const ModerationInfo = ({info}) => {
  if (info.length === 0) {
    return null;
  }

  return (
    <View style={styles.moderation}>
      <Text style={styles.moderationLegend}>{_.t('moderator')}:</Text>
      <Text style={styles.moderationText}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  moderation: {
    backgroundColor: '#F4F4F5',
    padding: 10,
  },
  moderationText: {
    fontSize: 12,
    color: '#F50263',
  },
  moderationLegend: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export default ModerationInfo;
