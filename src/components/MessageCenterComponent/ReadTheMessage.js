import React from 'react'
import { ReactComponent as BodyShape } from 'img/vector/icons/bodyshape.svg'
import Container from '../Containers/Container'
import ContainerRow from '../Containers/secondary/ContainerRow'
import BackToList from './Select/BackToList'
import Trash from './Select/Trash'
import Printer from './Select/Printer'
import Letter from './Select/Letter'
import AnswerForward from './AnswerForward/AnswerForward'
import HrSeparator from '../Separator/HrSeparator'
import AttachedFile from './Attach/AttachedFile'

const ReadTheMessage = () => {
  return (
    <>
      <ContainerRow rowClass="justify-content-end">
        <div className="col d-flex justify-content-start justify-content-sm-start my-2">
          <BackToList text="Zurück zum Posteingang" />
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
      </ContainerRow>

      <Container>
        <div className="message-container p-2">
          <div className="active-text main">Betreff: Workconsult Webseite</div>
        </div>
      </Container>

      <Container className="my-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-auto p-0">
              <BodyShape style={{ width: '3rem' }} />
            </div>

            <div className="col">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 active-text main p-0">
                    Ralf Bultschnieder
                  </div>
                  <div className="col-12 small active-text main p-0">to me</div>
                </div>
              </div>
            </div>

            <div className="col-auto active-text main">15 Jan 2020 10:55</div>
          </div>
        </div>
      </Container>

      <AnswerForward end answerText="Antworten" forwardText="Weiterleiten" />

      <Container>
        <div className="message-container p-2">
          <div className="active-text main">
            <p>Hallo Derya,</p>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat.
            </p>
            <p>
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
              diam nonummy nibh euismod.
            </p>
            <p>Ralf Butschnieder</p>
          </div>
        </div>
      </Container>

      <Container className="pt-4">
        <div className="container-fluid p-0">
          <div className="row">
            <AttachedFile />
            <AttachedFile />
          </div>
        </div>
      </Container>

      <Container className="py-2">
        <HrSeparator className="" />
      </Container>

      <AnswerForward answerText="Antworten" forwardText="Weiterleiten" />
    </>
  )
}

export default ReadTheMessage
