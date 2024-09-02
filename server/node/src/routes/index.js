const express = require('express')
const router = express.Router()

const data = [
  {
    text: '吃饭',
    done: false
  },
  {
    text: '睡觉',
    done: false
  },
  {
    text: '打豆豆',
    done: true
  }
]
router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/todos', (req, res) => {
  res.status(201).json(data)
})

// export default router;
module.exports = router
