import express, { json } from 'express'
import cors from 'cors'

const PORT = 5000
const app = express()

const data = [
  {
    id: 1,
    images: {
      main: [
        'https://cdn1.technopark.ru/technopark/photos_resized/product/248_248/722279/1_722279.jpg',
        'https://c.dns-shop.ru/thumb/st4/fit/320/250/377752ea43bfcf8404a65354712d5ebb/80bb92ccda2980e7f28359f234b8f26a3684acd7a840928f7ffd0eac9fb46227.jpg',
        'https://c.dns-shop.ru/thumb/st4/fit/320/250/23d0cd94b71300f6cd2e0aa8e24d7df8/507323d9ef73e9cb45b3160fbd3052ba017b83f4176bbec5841ff10166097161.jpg',
      ],
      big: ['', '', ''],
      preview: ['', '', ''],
    },
    title: 'Xiaomi 14',
    description:
      '6.36" Смартфон Xiaomi 14 512 ГБ черный [ядер - 8x(3.3 ГГц), 12 ГБ, 2 SIM, AMOLED, 2670x1200, камера 50+50+50 Мп, NFC, 5G, GPS, 4610 мА*ч]',
    count: 19,
    rating: 1.4,
    prices: {
      price: 109999,
      creditCoefficient: 1.17,
      oldPrice: 129999,
    },
    voblers: {
      tradeIn: false,
      split: false,
      sale: false,
      installmentPlan: false,
      isNew: false,
      cashback: {
        isCashback: true,
        how: 10000,
      },
    },
    display: 6,
    processor: 'snapdragon',
    ROM: 512,
    RAM: 16,
    camera: '50',
  },
  {
    id: 2,
    images: {
      main: [
        'https://cdn1.technopark.ru/technopark/photos_resized/product/248_248/713899/1_713899.jpg',
        'https://c.dns-shop.ru/thumb/st4/fit/320/250/03bccc40bc5fbd5859172cb0a155631b/245bbeefd844d58b3a2ea4e684998976a0dadbe4a8d2fdbaba089a0411892c60.jpg',
        'https://c.dns-shop.ru/thumb/st4/fit/320/250/664fc107c1e96b9ef8116834e86ebbd9/bd3ba3670141256ac7c96c2d4230978ba40e0d81896e45414317eb161d9abcb3.jpg',
      ],
      big: ['', '', ''],
      preview: ['', '', ''],
    },
    title: 'Samsung Galaxy S24 Ultra',
    description: 'description',
    count: 19,
    rating: 1.8,
    prices: {
      price: 149999,
      creditCoefficient: 1.17,
      oldPrice: 0,
    },
    voblers: {
      tradeIn: false,
      split: false,
      sale: false,
      installmentPlan: false,
      isNew: false,
      cashback: {
        isCashback: true,
        how: 10000,
      },
    },
    display: 6,
    processor: 'snapdragon',
    ROM: 512,
    RAM: 16,
    camera: '50',
  },
  {
    id: 3,
    images: {
      main: [
        'https://cdn1.technopark.ru/technopark/photos_resized/product/248_248/685034/1_685034.jpg',
        '',
        '',
      ],
      big: ['', '', ''],
      preview: ['', '', ''],
    },
    title: 'Apple iPhone 15',
    description: 'description',
    count: 19,
    rating: 2.3,
    prices: {
      price: 209999,
      creditCoefficient: 1.17,
      oldPrice: 0,
    },
    voblers: {
      tradeIn: false,
      split: false,
      sale: false,
      installmentPlan: false,
      isNew: false,
      cashback: {
        isCashback: true,
        how: 10000,
      },
    },
    display: 6,
    processor: 'snapdragon',
    ROM: 512,
    RAM: 16,
    camera: '50',
  },
  {
    id: 4,
    images: {
      main: [
        'https://cdn1.technopark.ru/technopark/photos_resized/product/248_248/647243/1_647243.jpg',
        '',
        '',
      ],
      big: ['', '', ''],
      preview: ['', '', ''],
    },
    title: 'Samsung Galaxy A34',
    description: 'description',
    count: 19,
    rating: 2.6,
    prices: {
      price: 29999,
      creditCoefficient: 1.17,
      oldPrice: 0,
    },
    voblers: {
      tradeIn: false,
      split: false,
      sale: false,
      installmentPlan: false,
      isNew: false,
      cashback: {
        isCashback: true,
        how: 10000,
      },
    },
    display: 6,
    processor: 'snapdragon',
    ROM: 512,
    RAM: 16,
    camera: '50',
  },
  {
    id: 5,
    images: {
      main: [
        'https://cdn1.technopark.ru/technopark/photos_resized/product/248_248/656233/1_656233.jpg',
        '',
        '',
      ],
      big: ['', '', ''],
      preview: ['', '', ''],
    },
    title: 'Infinix Hot 30',
    description: 'description',
    count: 19,
    rating: 3.1,
    prices: {
      price: 19999,
      creditCoefficient: 1.17,
      oldPrice: 0,
    },
    voblers: {
      tradeIn: false,
      split: false,
      sale: false,
      installmentPlan: false,
      isNew: false,
      cashback: {
        isCashback: true,
        how: 10000,
      },
    },
    display: 6,
    processor: 'snapdragon',
    ROM: 512,
    RAM: 16,
    camera: '50',
  },
  {
    id: 6,
    images: {
      main: [
        'https://cdn1.technopark.ru/technopark/photos_resized/product/248_248/645708/1_645708.jpg',
        '',
        '',
      ],
      big: ['', '', ''],
      preview: ['', '', ''],
    },
    title: 'Xiaomi Redmi Note 12',
    description: 'description',
    count: 19,
    rating: 3.8,
    prices: {
      price: 14999,
      creditCoefficient: 1.17,
      oldPrice: 0,
    },
    voblers: {
      tradeIn: false,
      split: false,
      sale: false,
      installmentPlan: false,
      isNew: false,
      cashback: {
        isCashback: true,
        how: 10000,
      },
    },
    display: 6,
    processor: 'snapdragon',
    ROM: 512,
    RAM: 16,
    camera: '50',
  },
  {
    id: 7,
    images: {
      main: [
        'https://cdn1.technopark.ru/technopark/photos_resized/product/248_248/686294/1_686294.jpg',
        '',
        '',
      ],
      big: ['', '', ''],
      preview: ['', '', ''],
    },
    title: 'Realme 11',
    description: 'description',
    count: 19,
    rating: 4,
    prices: {
      price: 18999,
      creditCoefficient: 1.17,
      oldPrice: 0,
    },
    voblers: {
      tradeIn: false,
      split: false,
      sale: false,
      installmentPlan: false,
      isNew: false,
      cashback: {
        isCashback: true,
        how: 10000,
      },
    },
    display: 6,
    processor: 'snapdragon',
    ROM: 512,
    RAM: 16,
    camera: '50',
  },
  {
    id: 8,
    images: {
      main: [
        'https://cdn1.technopark.ru/technopark/photos_resized/product/248_248/585688/1_585688.jpg',
        '',
        '',
      ],
      big: ['', '', ''],
      preview: ['', '', ''],
    },
    title: 'Vivo v25',
    description: 'description',
    count: 19,
    rating: 4.8,
    prices: {
      price: 14999,
      creditCoefficient: 1.17,
      oldPrice: 0,
    },
    voblers: {
      tradeIn: false,
      split: false,
      sale: false,
      installmentPlan: false,
      isNew: false,
      cashback: {
        isCashback: true,
        how: 10000,
      },
    },
    display: 6,
    processor: 'snapdragon',
    ROM: 512,
    RAM: 16,
    camera: '50',
  },
]

app.use(cors())
app.use(express.json())

app.get('/api', (req, res) => {
  console.log(req.query.limit, req.query.page, req.query.sortedBy)
  if (req.query.sortedBy === '-price') {
    data.sort((a, b) => (a.prices.price > b.prices.price - 1 ? 1 : -1))
  }
  if (req.query.sortedBy === 'price') {
    data.sort((a, b) => (a.prices.price < b.prices.price - 1 ? 1 : -1))
  }

  res.json({
    items: data.slice(
      req.query.page * req.query.limit - req.query.limit,
      req.query.page * req.query.limit
    ),
    meta: {
      total_items: data.length,
      total_pages: Math.ceil(data.length / req.query.limit),
      current_page: +req.query.page,
      per_page: +req.query.limit,
      remaining_count: 0,
    },
  })
})

app.listen(PORT, () => {
  console.log(`Server has been started on ${PORT} port`)
})
