import React from 'react'
import styled from 'styled-components'
import { COLORS, DOWNLOAD } from 'Root/constants'
import { Text } from 'components/atoms/Typography'
import TextLink from 'components/atoms/TextLink'
import listItem from 'assets/images/list-item.svg'

const StyledUL = styled.ul`
  text-indent: -1em;
  list-style: inside url(${listItem});
`

export const Preconditions = () => (
  <StyledUL>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        Authors present their papers at the conference in the form of a 15 min.
        speech in the case of an oral presentation or a 3 minutes presentation
        additionally to their personal poster presentation. One Author may
        present more than one paper. However, it will not be possible to publish
        a paper without having presented it
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        Authors intending to publish in the IEEE Xplore® digital library must
        agree to transfer the ownership rights of their intellectual property to
        IEEE. This is done using the electronic IEEE Copyright Form (eCF)
        (Authors will be instructed directly by IEEE via email to sign an online
        form over a secured way).
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        Acceptance of papers requires compliance with the guidelines provided in
        the ISSE paper template.
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        Content of paper suits the scope of&nbsp;
        <TextLink
          as="a"
          href={DOWNLOAD.REG_FORM}
          color={COLORS.FLAX_FLOWER_BLUE}
        >
          Content of paper suits the scope of IEEE Electronics Packaging Society
          (EPS)&nbsp;
        </TextLink>
        .
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        Papers written in accordance with the guidelines as provided in the ISSE
        paper template.
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        Papers will be checked for their technical merit (e.g. whether
        reviewers' comments to the abstract has been considered) and will
        undergo the IEEE CrossCheck automated plagiarism detection and
        prevention software. Only papers with EPS compliant contents are allowed
        to be forwarded to IEEE for publication on Xplore after the conference.
        The decision on acceptance is on IEEE's discretion.
      </Text>
    </li>
  </StyledUL>
)

export const Recommendations = () => (
  <StyledUL>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        <b>Abstract title: </b> A concise title without subject-specific
        abbreviations should be chosen.
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        <b>Author listing</b> (principal author first): Full first name (not
        abbreviated), surname (family), and affiliations, mailing address,
        telephone and email address. Please indicate who is intended to present
        the paper at the conference and who is the corresponding author.)
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        <b>Presentation:</b> Indicate which session topic your paper matches and
        whether you prefer to do an oral or a poster presentation. Important:
        Please note that this decision is not a subject of quality of the
        contribution. Therefore, the same high quality level is expected from
        both types of paper – oral and poster paper. Since the conference will
        have no parallel oral sessions the regular contribution is a poster
        paper. Scientific discussions with technical depth are most fruitful in
        small groups in the vicinity of your poster. However, some papers on
        which subject addresses a broader auditory will be selected for the oral
        sessions. Placement is at the Technical Program Committees' discretion.
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        <b>Abstract text:</b> The peculiarities of the work to be presented
        should clearly be stated (e.g. by referring to work that has already
        been done). Only original material should be submitted, and abstracts
        should contain enough detail to clearly convey the approach and the
        results of the research. The presentation and publishing of papers
        require company clearance. Commercial papers purely consisting of
        product information with no research results are not appropriate for the
        ISSE Conference. Let proofread your abstract at least by one colleague
        who is not familiar with the particular subject of your work. Make use
        of spell-checking aids and clear your paper from linguistic weaknesses
        (e.g. by proofreading from someone who's native language is English).
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        <b>Keywords:</b> List a maximum of five keywords.
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        <b>Brief biography </b>(of the principal author) Maximum 50 words about
        affiliation, academic/scientific degree and research fields. Fill
        biography in the registration form.
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        <b>Peer abstract review: </b>Paper abstracts will be peer-reviewed for
        technical merit, content, and clearness by an internationally composed
        Reviewer Committee under the leadership of the Conference Chair. Authors
        of accepted (Notification of acceptance: March 9th, 2020) abstracts will
        be invited to submit a full-length conference paper according to the
        conference paper template. Particularly interesting for young
        scientists: By contrast to other technical conferences, within ISSE this
        notification may contain valuable comments aiming to support authors in
        writing papers with high quality. Consideration of these comments by the
        author(s) in the full paper will be checked before publication. The
        accepted full-length papers will be compiled to conference proceedings
        which will be available on a memory stick at the conference desk.
      </Text>
    </li>
  </StyledUL>
)

export const Instructions = () => (
  <StyledUL>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        <b>Guide for Presenters:</b> Maximum size: B1, minimum size: A1. The
        poster board is 90 cm (wide) x 120 cm (tall). Please, prepare posters in
        the poster hall in the morning on the day of the presentation. For the
        location of the poster refer to the program book and conference
        information. The posters must be taken off at the end of the day. Tools
        for fixing of posters will be supported by the organizers to stick the
        posters onto the poster boards.
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        <b>Poster presentation hints:</b> Short PowerPoint presentation of the
        paper and the related poster is necessary, where the maximum available
        time is 3 minutes, otherwise the presentation will be cut off by the
        chair. Recommended content of the short presentation is no more than 3
        slides, otherwise it will be impossible to fit into the time
        limitations. The short talks will be presented in the Conference Hall,
        then the session will continue by discussion next to the poster board.
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        <b>Poster presentation recommendation:</b> The first slide is the
        opening slide, with name, title, affiliation, poster number. The second
        slide is recommended to be a short description of the problem and the
        experimental methodology, then the third may present the main results in
        short form. The purpose of the short presentation is to convince the
        audience to come to the poster for further interest, discussion and
        information exchange.
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        <b>Oral presentation hints: </b>Oral presentations cannot exceed 20-25
        minutes (including Q&A). The chair person will check the time of your
        presentation. Please be advised that presentations exceeding the limit
        will be cut off by the chair in the interest of time. Please try to
        summarize your results in 10-15 slides.
      </Text>
    </li>
    <li>
      <Text
        color={COLORS.MAJOLICA_BLUE}
        display="contents"
        fontSize={['xs', 's', 's']}
        fontWeight="thin"
      >
        <b>Copying presentations:</b> Presenters do not have to bring their own
        computer. There will be a Windows based laptop computer that will be
        available in the session room. Your presentations will be accepted in
        USB Flash drive form. The computer will be provided to upload
        presentations and test them in the meeting room before particular
        section starts. There will also be a technician who will assist you in
        all technical matters.
      </Text>
    </li>
  </StyledUL>
)
