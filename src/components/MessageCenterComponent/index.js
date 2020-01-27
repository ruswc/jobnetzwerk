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

const mock1 = 'https://via.placeholder.com/600/f66b97'
const mock2 = 'https://via.placeholder.com/600/56a8c2'
const mock3 = 'https://via.placeholder.com/600/b0f7cc'
const mock4 = 'https://via.placeholder.com/600/54176f'
const mock5 = 'https://via.placeholder.com/600/51aa97'
const mock6 = 'https://via.placeholder.com/600/aaffcc'
const mock7 = 'https://via.placeholder.com/600/dd1177'
const mock8 = 'https://via.placeholder.com/600/954565'

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
    <MessageItem photo={mock1} name={name1} text={text1} data={data1} />
    <MessageItem photo={mock2} name={name2} text={text2} data={data2} />
    <MessageItem photo={mock3} name={name3} text={text3} data={data3} />
    <MessageItem photo={mock4} name={name4} text={text4} data={data4} />
    <MessageItem photo={mock5} name={name1} text={text1} data={data5} />
    <MessageItem photo={mock6} name={name2} text={text2} data={data6} />
    <MessageItem photo={mock7} name={name3} text={text3} data={data7} />
    <MessageItem photo={mock8} name={name4} text={text4} data={data8} />
    <MessageItem photo={mock1} name={name1} text={text1} data={data9} />
    <MessageItem photo={mock2} name={name1} text={text1} data={data1} />
    <MessageItem photo={mock3} name={name2} text={text2} data={data2} />
    <MessageItem photo={mock4} name={name3} text={text3} data={data3} />
    <MessageItem photo={mock5} name={name4} text={text4} data={data4} />
    <MessageItem photo={mock6} name={name1} text={text1} data={data5} />
    <MessageItem photo={mock7} name={name2} text={text2} data={data6} />
    <MessageItem photo={mock8} name={name3} text={text3} data={data7} />
    <MessageItem photo={mock1} name={name4} text={text4} data={data8} />
    <MessageItem photo={mock2} name={name1} text={text1} data={data9} />
    <MessageItem photo={mock3} name={name1} text={text1} data={data1} />
    <MessageItem photo={mock4} name={name2} text={text2} data={data2} />
    <MessageItem photo={mock5} name={name3} text={text3} data={data3} />
    <MessageItem photo={mock6} name={name4} text={text4} data={data4} />
    <MessageItem photo={mock7} name={name1} text={text1} data={data5} />
    <MessageItem photo={mock8} name={name2} text={text2} data={data6} />
  </>
)

export default MessageCenterComponent
