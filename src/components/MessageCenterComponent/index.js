import React from 'react'
import SearchInput from './Search/SearchInput'
import Filter from './Search/Filter'
import ContainerRow from '../Containers/secondary/ContainerRow'
import ContainerCol from '../Containers/secondary/ContainerCol'
import CheckBox from './Select/CheckBox'
import Trash from './Select/Trash'
import Printer from './Select/Printer'
import Letter from './Select/Letter'
import Pages from './Select/Pages'
import MessageItem from './Messages/MessageItem'

const name1 = 'Ralf Bultschnieder'
const name2 = 'Max Mustermann'
const name3 = 'Derya Bulut'
const name4 = 'Vladyslav Prykhodko'

const text1 =
  'Topic of the Message | Lorem ipsum dolor sit amet, conseteturfg Topic of the Message Lorem ipsum dolor sit amet, conseteturfg'
const text2 =
  'Topic of the Message longer | Lorem ipsum dolor sit amet, conbs. Lorem ipsum dolor sit amet, conbs'
const text3 = 'Topic short | Lorem ipsum dolor sit amet, consetetur sadipscinfg'
const text4 =
  'Topic of the Message  XXLLL longeeer | Lorem ipsum dolor sit ai Lorem ipsum dolor sit ai Lorem ipsum dolor sit ai Lorem ipsum dolor sit ai Lorem ipsum dolor sit ai Lorem ipsum dolor sit ai Lorem ipsum dolor sit ai'

const data1 = '6  Min.'
const data2 = 'Gestern'
const data3 = '12 Oct.'
const data4 = '28 Sept.'
const data5 = '27 Sept.'
const data6 = '15 Sept.'
const data7 = '30 Aug.'
const data8 = '10 Aug.'
const data9 = '27 Jul.'

const MessageCenterComponent = () => (
  <>
    <ContainerRow>
      <ContainerCol>
        <SearchInput />
      </ContainerCol>
      <ContainerCol>
        <Filter />
      </ContainerCol>
    </ContainerRow>
    <ContainerRow>
      <div className="col-12 col-sm-auto d-flex align-items-center my-2">
        <CheckBox />
      </div>
      <div className="col-12 col-sm-auto d-flex align-items-center my-2">
        <Trash />
      </div>
      <div className="col-12 col-sm-auto d-flex align-items-center my-2">
        <Printer />
      </div>
      <div className="col-12 col-sm-auto d-flex align-items-center my-2">
        <Letter />
      </div>
      <div className="col d-flex justify-content-start justify-content-sm-end my-2">
        <Pages />
      </div>
    </ContainerRow>
    <MessageItem name={name1} text={text1} data={data1} />
    <MessageItem name={name2} text={text2} data={data2} />
    <MessageItem name={name3} text={text3} data={data3} />
    <MessageItem name={name4} text={text4} data={data4} />
    <MessageItem name={name1} text={text1} data={data5} />
    <MessageItem name={name2} text={text2} data={data6} />
    <MessageItem name={name3} text={text3} data={data7} />
    <MessageItem name={name4} text={text4} data={data8} />
    <MessageItem name={name1} text={text1} data={data9} />
    <MessageItem name={name1} text={text1} data={data1} />
    <MessageItem name={name2} text={text2} data={data2} />
    <MessageItem name={name3} text={text3} data={data3} />
    <MessageItem name={name4} text={text4} data={data4} />
    <MessageItem name={name1} text={text1} data={data5} />
    <MessageItem name={name2} text={text2} data={data6} />
    <MessageItem name={name3} text={text3} data={data7} />
    <MessageItem name={name4} text={text4} data={data8} />
    <MessageItem name={name1} text={text1} data={data9} />
    <MessageItem name={name1} text={text1} data={data1} />
    <MessageItem name={name2} text={text2} data={data2} />
    <MessageItem name={name3} text={text3} data={data3} />
    <MessageItem name={name4} text={text4} data={data4} />
    <MessageItem name={name1} text={text1} data={data5} />
    <MessageItem name={name2} text={text2} data={data6} />
  </>
)

export default MessageCenterComponent
