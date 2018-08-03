/* istanbul ignore file */
import React from 'react'
import styled from 'react-emotion'
import { compose, get } from 'lodash/fp'
import { withConsumer } from 'context-hoc'
import { fetchHocGet } from 'utils/cachedFetch'
import { cleanString } from 'utils/utilities'
import { withFullPageLoader } from 'components'

const SkinGroup = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;
`

const Titles = ({ titles }) =>
  titles.map(t => (
    <SkinGroup key={t.id}>
      <h3>{t.name}</h3>
      <p>{cleanString(get('achievements[0].requirement')(t)) || cleanString(get('achievements[0].description')(t))}</p>
    </SkinGroup>
  ))

const TitlesEnhancer = compose(
  withConsumer('app'),
  fetchHocGet(`api/account/titles?token=:token`, {
    dataProp: 'titles',
    props: ({ loading, titles = [] }) => ({ loading, titles }),
    variables: ({ authUser }) => ({ token: authUser.token })
  }),
  withFullPageLoader(({ loading }) => loading)
)(Titles)

export default TitlesEnhancer
