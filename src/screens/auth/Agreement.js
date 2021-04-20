import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet, Dimensions} from 'react-native';
import _ from '../../services/i18n';

class UserAgreement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}>Обязанности пользователя</Text>
        <Text style={styles.txt}>
          При регистрации продавец услуг обязан предоставить правдивую, точную и
          полную информацию о себе по вопросам, предлагаемым в форме
          регистрации, в форме заполнения анкеты и в формах добавления услуг
          (процедур) и акций, и поддерживать эту информацию в актуальном
          состоянии.
          {'\n'}
          {'\n'}В случае предоставления недостоверной информации, Администрация
          Портала имеет право приостановить либо отменить регистрацию продавца
          услуг и прекратить оказание услуг Портала.
          {'\n'}
          {'\n'}
          Продавец услуг обязуется не использовать самостоятельно или с
          привлечением третьих лиц возможности Портала в целях, которые могут
          быть квалифицированы как нарушение прав третьих лиц на объекты
          интеллектуальной собственности, недобросовестная конкуренция, иное
          нарушение действующего законодательства Украины.
          {'\n'}
          {'\n'}
          Продавец услуг не имеет права осуществлять действий, которые влияют на
          нормальную работу Портала и являются его недобросовестным
          использованием.
        </Text>
        <Text style={styles.title}>Ограничение ответственности</Text>
        <Text style={styles.txt}>
          Администрация не гарантирует сохранность профиля продавца услуг, и
          размещенной им в приложении информации.
          {'\n'}
          {'\n'}
          Администрация имеет право удалить профиль продавца услуг, если он не
          используется в течение 6 и более календарных месяцев подряд.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 15,
  },
  txt: {
    fontSize: 14,
    lineHeight: 16,
    marginHorizontal: 15,
  },
});

export default UserAgreement;
