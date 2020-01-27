import React from 'react'
import pin from 'img/vector/pin.svg'
import gps from 'img/vector/gps.svg'

import Row from './Row'

const text1 =
  'Werbung und Marketing - Spezialisten, Werbung und Marketing - Fachkräfte, Verlags- und\n' +
  '                        Medienkaufleute (sonstigte) - Fachkräfte, Medien- und Theaterwissenschaft - Experten, Markt- und\n' +
  '                        Meinungsforschung - Spezialisten, Sprach- und Literaturwissenschaften (sonstige) - Experten,\n' +
  '                        Grafik-, Kommunikations- und Fotodesign - Fachkräfte, Grafik-, Kommunikations- und Fotodesign -\n' +
  '                        Spezialisten'
const text2 = 'Berlin, Hamburg, Köln, Düsseldorf'

const ProfileBody = () => (
  <div className="profile-body mt-2 p-4 px-md-2">
    <div className="container-fluid">
      <Row img={pin} header="BERUFSGRUPPEN" />
      <Row text={text1} />
      <Row img={gps} header="EINSATZRAUM" />
      <Row text={text2} />
    </div>
  </div>
)

export default ProfileBody
