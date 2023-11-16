# Get Relative Date String

- Get x days/months/years ago based on current date and published date of a resourec

## Code

````js

export const relativeDateString = (dateString) => {
  if (!dateString) {
    return ''
  }
  const now = moment()
  const articleDate = moment(new Date(dateString))

  var diffDays = now.diff(articleDate, 'days')
  var diffWeeks = now.diff(articleDate, 'weeks')
  var diffMonths = now.diff(articleDate, 'months')
  var diffYears = now.diff(articleDate, 'years')

  if (diffDays <= 0) {
    return 'Today'
  } else if (diffDays >= 1 && diffDays <= 6) {
    return diffDays > 1 ? `${diffDays} days ago` : '1 day ago'
  } else if (diffWeeks >= 1 && diffWeeks <= 3) {
    return diffWeeks > 1 ? `${diffWeeks} weeks ago` : '1 week ago'
  } else if (diffMonths >= 1 && diffMonths <= 12) {
    return diffMonths > 1 ? `${diffMonths} months ago` : '1 month ago'
  } else {
    return diffYears > 1 ? `${diffYears} years ago` : '1 year ago'
  }
}```
````
