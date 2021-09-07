import axios from 'axios'

const fetchData = async (iteration: number) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: `https://api.hatchways.io/assessment/sentences/${iteration}`
    })

    return data.data.sentence.toLowerCase()

  } catch (err) {
    console.log(err)
  }
}

export default fetchData