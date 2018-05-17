import React from 'react'

const styles = {
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  keyword: {
    color: '#88f',
  },
  title: {
    fontWeight: 'bold',
  },
  reviews: {
    float: 'right',
  },
}

const Keyword = ({ keyword }) => <span style={styles.keyword}>{keyword}</span>

const KeywordList = ({ keywords }) => (
  <div>
    {keywords.map((keyword, index) => (
      <span key={index}>
        {index > 0 && <span>, </span>}
        <Keyword keyword={keyword} />
      </span>
    ))}
  </div>
)

const AddedOnBy = ({ preprint }) => (
  <span>
    Added on <span>{preprint.created_date}</span> by{' '}
    <span>{preprint.created_username}</span>
  </span>
)

const NoReviewsOrReviewsRequested = ({ preprint }) => {
  if (preprint.reviews) {
    return <span>{`${preprint.reviews.length} reviews `}</span>
  }
  return <span>Reviews requested</span>
}

const SubmitReviewLink = props => <a href="#">add review</a>

const NoReviewsAndSubmit = ({ preprint }) => (
  <span style={styles.reviews}>
    <NoReviewsOrReviewsRequested preprint={preprint} />
    <SubmitReviewLink />
  </span>
)

const Preprint = ({ preprint }) => (
  <div style={styles.container}>
    <KeywordList keywords={preprint.keywords} />
    <div style={styles.title}>{preprint.title}</div>
    <div>
      <AddedOnBy preprint={preprint} />
      <NoReviewsAndSubmit preprint={preprint} />
    </div>
  </div>
)

export default Preprint
