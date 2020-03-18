import React from "react";

export const TimeZone = props => {
  return (
    <div>
      <select
        onChange={props.handleChange}
        name='timezone'
        value={props.user.timezone}
        required
      >
        <option
          timezoneid='1'
          gmtAdjustment='GMT-12:00'
          useDaylightTime='0'
          value='-12'
        >
          (GMT-12:00) International Date Line West
        </option>
        <option
          timezoneid='2'
          gmtAdjustment='GMT-11:00'
          useDaylightTime='0'
          value='-11'
        >
          (GMT-11:00) Midway Island, Samoa
        </option>
        <option
          timezoneid='3'
          gmtAdjustment='GMT-10:00'
          useDaylightTime='0'
          value='-10'
        >
          (GMT-10:00) Hawaii
        </option>
        <option
          timezoneid='4'
          gmtAdjustment='GMT-09:00'
          useDaylightTime='1'
          value='-9'
        >
          (GMT-09:00) Alaska
        </option>
        <option
          timezoneid='5'
          gmtAdjustment='GMT-08:00'
          useDaylightTime='1'
          value='-8'
        >
          (GMT-08:00) Pacific Time (US & Canada)
        </option>
        <option
          timezoneid='6'
          gmtAdjustment='GMT-08:00'
          useDaylightTime='1'
          value='-8'
        >
          (GMT-08:00) Tijuana, Baja California
        </option>
        <option
          timezoneid='7'
          gmtAdjustment='GMT-07:00'
          useDaylightTime='0'
          value='-7'
        >
          (GMT-07:00) Arizona
        </option>
        <option
          timezoneid='8'
          gmtAdjustment='GMT-07:00'
          useDaylightTime='1'
          value='-7'
        >
          (GMT-07:00) Chihuahua, La Paz, Mazatlan
        </option>
        <option
          timezoneid='9'
          gmtAdjustment='GMT-07:00'
          useDaylightTime='1'
          value='-7'
        >
          (GMT-07:00) Mountain Time (US & Canada)
        </option>
        <option
          timezoneid='10'
          gmtAdjustment='GMT-06:00'
          useDaylightTime='0'
          value='-6'
        >
          (GMT-06:00) Central America
        </option>
        <option
          timezoneid='11'
          gmtAdjustment='GMT-06:00'
          useDaylightTime='1'
          value='-6'
        >
          (GMT-06:00) Central Time (US & Canada)
        </option>
        <option
          timezoneid='12'
          gmtAdjustment='GMT-06:00'
          useDaylightTime='1'
          value='-6'
        >
          (GMT-06:00) Guadalajara, Mexico City, Monterrey
        </option>
        <option
          timezoneid='13'
          gmtAdjustment='GMT-06:00'
          useDaylightTime='0'
          value='-6'
        >
          (GMT-06:00) Saskatchewan
        </option>
        <option
          timezoneid='14'
          gmtAdjustment='GMT-05:00'
          useDaylightTime='0'
          value='-5'
        >
          (GMT-05:00) Bogota, Lima, Quito, Rio Branco
        </option>
        <option
          timezoneid='15'
          gmtAdjustment='GMT-05:00'
          useDaylightTime='1'
          value='-5'
        >
          (GMT-05:00) Eastern Time (US & Canada)
        </option>
        <option
          timezoneid='16'
          gmtAdjustment='GMT-05:00'
          useDaylightTime='1'
          value='-5'
        >
          (GMT-05:00) Indiana (East)
        </option>
        <option
          timezoneid='17'
          gmtAdjustment='GMT-04:00'
          useDaylightTime='1'
          value='-4'
        >
          (GMT-04:00) Atlantic Time (Canada)
        </option>
        <option
          timezoneid='18'
          gmtAdjustment='GMT-04:00'
          useDaylightTime='0'
          value='-4'
        >
          (GMT-04:00) Caracas, La Paz
        </option>
        <option
          timezoneid='19'
          gmtAdjustment='GMT-04:00'
          useDaylightTime='0'
          value='-4'
        >
          (GMT-04:00) Manaus
        </option>
        <option
          timezoneid='20'
          gmtAdjustment='GMT-04:00'
          useDaylightTime='1'
          value='-4'
        >
          (GMT-04:00) Santiago
        </option>
        <option
          timezoneid='21'
          gmtAdjustment='GMT-03:30'
          useDaylightTime='1'
          value='-3.5'
        >
          (GMT-03:30) Newfoundland
        </option>
        <option
          timezoneid='22'
          gmtAdjustment='GMT-03:00'
          useDaylightTime='1'
          value='-3'
        >
          (GMT-03:00) Brasilia
        </option>
        <option
          timezoneid='23'
          gmtAdjustment='GMT-03:00'
          useDaylightTime='0'
          value='-3'
        >
          (GMT-03:00) Buenos Aires, Georgetown
        </option>
        <option
          timezoneid='24'
          gmtAdjustment='GMT-03:00'
          useDaylightTime='1'
          value='-3'
        >
          (GMT-03:00) Greenland
        </option>
        <option
          timezoneid='25'
          gmtAdjustment='GMT-03:00'
          useDaylightTime='1'
          value='-3'
        >
          (GMT-03:00) Montevideo
        </option>
        <option
          timezoneid='26'
          gmtAdjustment='GMT-02:00'
          useDaylightTime='1'
          value='-2'
        >
          (GMT-02:00) Mid-Atlantic
        </option>
        <option
          timezoneid='27'
          gmtAdjustment='GMT-01:00'
          useDaylightTime='0'
          value='-1'
        >
          (GMT-01:00) Cape Verde Is.
        </option>
        <option
          timezoneid='28'
          gmtAdjustment='GMT-01:00'
          useDaylightTime='1'
          value='-1'
        >
          (GMT-01:00) Azores
        </option>
        <option
          timezoneid='29'
          gmtAdjustment='GMT+00:00'
          useDaylightTime='0'
          value='0'
        >
          (GMT+00:00) Casablanca, Monrovia, Reykjavik
        </option>
        <option
          timezoneid='30'
          gmtAdjustment='GMT+00:00'
          useDaylightTime='1'
          value='0'
        >
          (GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London
        </option>
        <option
          timezoneid='31'
          gmtAdjustment='GMT+01:00'
          useDaylightTime='1'
          value='1'
        >
          (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
        </option>
        <option
          timezoneid='32'
          gmtAdjustment='GMT+01:00'
          useDaylightTime='1'
          value='1'
        >
          (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague
        </option>
        <option
          timezoneid='33'
          gmtAdjustment='GMT+01:00'
          useDaylightTime='1'
          value='1'
        >
          (GMT+01:00) Brussels, Copenhagen, Madrid, Paris
        </option>
        <option
          timezoneid='34'
          gmtAdjustment='GMT+01:00'
          useDaylightTime='1'
          value='1'
        >
          (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb
        </option>
        <option
          timezoneid='35'
          gmtAdjustment='GMT+01:00'
          useDaylightTime='1'
          value='1'
        >
          (GMT+01:00) West Central Africa
        </option>
        <option
          timezoneid='36'
          gmtAdjustment='GMT+02:00'
          useDaylightTime='1'
          value='2'
        >
          (GMT+02:00) Amman
        </option>
        <option
          timezoneid='37'
          gmtAdjustment='GMT+02:00'
          useDaylightTime='1'
          value='2'
        >
          (GMT+02:00) Athens, Bucharest, Istanbul
        </option>
        <option
          timezoneid='38'
          gmtAdjustment='GMT+02:00'
          useDaylightTime='1'
          value='2'
        >
          (GMT+02:00) Beirut
        </option>
        <option
          timezoneid='39'
          gmtAdjustment='GMT+02:00'
          useDaylightTime='1'
          value='2'
        >
          (GMT+02:00) Cairo
        </option>
        <option
          timezoneid='40'
          gmtAdjustment='GMT+02:00'
          useDaylightTime='0'
          value='2'
        >
          (GMT+02:00) Harare, Pretoria
        </option>
        <option
          timezoneid='41'
          gmtAdjustment='GMT+02:00'
          useDaylightTime='1'
          value='2'
        >
          (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
        </option>
        <option
          timezoneid='42'
          gmtAdjustment='GMT+02:00'
          useDaylightTime='1'
          value='2'
        >
          (GMT+02:00) Jerusalem
        </option>
        <option
          timezoneid='43'
          gmtAdjustment='GMT+02:00'
          useDaylightTime='1'
          value='2'
        >
          (GMT+02:00) Minsk
        </option>
        <option
          timezoneid='44'
          gmtAdjustment='GMT+02:00'
          useDaylightTime='1'
          value='2'
        >
          (GMT+02:00) Windhoek
        </option>
        <option
          timezoneid='45'
          gmtAdjustment='GMT+03:00'
          useDaylightTime='0'
          value='3'
        >
          (GMT+03:00) Kuwait, Riyadh, Baghdad
        </option>
        <option
          timezoneid='46'
          gmtAdjustment='GMT+03:00'
          useDaylightTime='1'
          value='3'
        >
          (GMT+03:00) Moscow, St. Petersburg, Volgograd
        </option>
        <option
          timezoneid='47'
          gmtAdjustment='GMT+03:00'
          useDaylightTime='0'
          value='3'
        >
          (GMT+03:00) Nairobi
        </option>
        <option
          timezoneid='48'
          gmtAdjustment='GMT+03:00'
          useDaylightTime='0'
          value='3'
        >
          (GMT+03:00) Tbilisi
        </option>
        <option
          timezoneid='49'
          gmtAdjustment='GMT+03:30'
          useDaylightTime='1'
          value='3.5'
        >
          (GMT+03:30) Tehran
        </option>
        <option
          timezoneid='50'
          gmtAdjustment='GMT+04:00'
          useDaylightTime='0'
          value='4'
        >
          (GMT+04:00) Abu Dhabi, Muscat
        </option>
        <option
          timezoneid='51'
          gmtAdjustment='GMT+04:00'
          useDaylightTime='1'
          value='4'
        >
          (GMT+04:00) Baku
        </option>
        <option
          timezoneid='52'
          gmtAdjustment='GMT+04:00'
          useDaylightTime='1'
          value='4'
        >
          (GMT+04:00) Yerevan
        </option>
        <option
          timezoneid='53'
          gmtAdjustment='GMT+04:30'
          useDaylightTime='0'
          value='4.5'
        >
          (GMT+04:30) Kabul
        </option>
        <option
          timezoneid='54'
          gmtAdjustment='GMT+05:00'
          useDaylightTime='1'
          value='5'
        >
          (GMT+05:00) Yekaterinburg
        </option>
        <option
          timezoneid='55'
          gmtAdjustment='GMT+05:00'
          useDaylightTime='0'
          value='5'
        >
          (GMT+05:00) Islamabad, Karachi, Tashkent
        </option>
        <option
          timezoneid='56'
          gmtAdjustment='GMT+05:30'
          useDaylightTime='0'
          value='5.5'
        >
          (GMT+05:30) Sri Jayawardenapura
        </option>
        <option
          timezoneid='57'
          gmtAdjustment='GMT+05:30'
          useDaylightTime='0'
          value='5.5'
        >
          (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
        </option>
        <option
          timezoneid='58'
          gmtAdjustment='GMT+05:45'
          useDaylightTime='0'
          value='5.75'
        >
          (GMT+05:45) Kathmandu
        </option>
        <option
          timezoneid='59'
          gmtAdjustment='GMT+06:00'
          useDaylightTime='1'
          value='6'
        >
          (GMT+06:00) Almaty, Novosibirsk
        </option>
        <option
          timezoneid='60'
          gmtAdjustment='GMT+06:00'
          useDaylightTime='0'
          value='6'
        >
          (GMT+06:00) Astana, Dhaka
        </option>
        <option
          timezoneid='61'
          gmtAdjustment='GMT+06:30'
          useDaylightTime='0'
          value='6.5'
        >
          (GMT+06:30) Yangon (Rangoon)
        </option>
        <option
          timezoneid='62'
          gmtAdjustment='GMT+07:00'
          useDaylightTime='0'
          value='7'
        >
          (GMT+07:00) Bangkok, Hanoi, Jakarta
        </option>
        <option
          timezoneid='63'
          gmtAdjustment='GMT+07:00'
          useDaylightTime='1'
          value='7'
        >
          (GMT+07:00) Krasnoyarsk
        </option>
        <option
          timezoneid='64'
          gmtAdjustment='GMT+08:00'
          useDaylightTime='0'
          value='8'
        >
          (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi
        </option>
        <option
          timezoneid='65'
          gmtAdjustment='GMT+08:00'
          useDaylightTime='0'
          value='8'
        >
          (GMT+08:00) Kuala Lumpur, Singapore
        </option>
        <option
          timezoneid='66'
          gmtAdjustment='GMT+08:00'
          useDaylightTime='0'
          value='8'
        >
          (GMT+08:00) Irkutsk, Ulaan Bataar
        </option>
        <option
          timezoneid='67'
          gmtAdjustment='GMT+08:00'
          useDaylightTime='0'
          value='8'
        >
          (GMT+08:00) Perth
        </option>
        <option
          timezoneid='68'
          gmtAdjustment='GMT+08:00'
          useDaylightTime='0'
          value='8'
        >
          (GMT+08:00) Taipei
        </option>
        <option
          timezoneid='69'
          gmtAdjustment='GMT+09:00'
          useDaylightTime='0'
          value='9'
        >
          (GMT+09:00) Osaka, Sapporo, Tokyo
        </option>
        <option
          timezoneid='70'
          gmtAdjustment='GMT+09:00'
          useDaylightTime='0'
          value='9'
        >
          (GMT+09:00) Seoul
        </option>
        <option
          timezoneid='71'
          gmtAdjustment='GMT+09:00'
          useDaylightTime='1'
          value='9'
        >
          (GMT+09:00) Yakutsk
        </option>
        <option
          timezoneid='72'
          gmtAdjustment='GMT+09:30'
          useDaylightTime='0'
          value='9.5'
        >
          (GMT+09:30) Adelaide
        </option>
        <option
          timezoneid='73'
          gmtAdjustment='GMT+09:30'
          useDaylightTime='0'
          value='9.5'
        >
          (GMT+09:30) Darwin
        </option>
        <option
          timezoneid='74'
          gmtAdjustment='GMT+10:00'
          useDaylightTime='0'
          value='10'
        >
          (GMT+10:00) Brisbane
        </option>
        <option
          timezoneid='75'
          gmtAdjustment='GMT+10:00'
          useDaylightTime='1'
          value='10'
        >
          (GMT+10:00) Canberra, Melbourne, Sydney
        </option>
        <option
          timezoneid='76'
          gmtAdjustment='GMT+10:00'
          useDaylightTime='1'
          value='10'
        >
          (GMT+10:00) Hobart
        </option>
        <option
          timezoneid='77'
          gmtAdjustment='GMT+10:00'
          useDaylightTime='0'
          value='10'
        >
          (GMT+10:00) Guam, Port Moresby
        </option>
        <option
          timezoneid='78'
          gmtAdjustment='GMT+10:00'
          useDaylightTime='1'
          value='10'
        >
          (GMT+10:00) Vladivostok
        </option>
        <option
          timezoneid='79'
          gmtAdjustment='GMT+11:00'
          useDaylightTime='1'
          value='11'
        >
          (GMT+11:00) Magadan, Solomon Is., New Caledonia
        </option>
        <option
          timezoneid='80'
          gmtAdjustment='GMT+12:00'
          useDaylightTime='1'
          value='12'
        >
          (GMT+12:00) Auckland, Wellington
        </option>
        <option
          timezoneid='81'
          gmtAdjustment='GMT+12:00'
          useDaylightTime='0'
          value='12'
        >
          (GMT+12:00) Fiji, Kamchatka, Marshall Is.
        </option>
        <option
          timezoneid='82'
          gmtAdjustment='GMT+13:00'
          useDaylightTime='0'
          value='13'
        >
          (GMT+13:00) Nuku'alofa
        </option>
      </select>
    </div>
  );
};
