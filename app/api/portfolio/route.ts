import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET(request: Request) {
  try {
    // Get the absolute path to the JSON file
    const filePath = path.join(process.cwd(), 'app', 'offerings', 'portfolio.json')
    
    // Check if file exists first
    try {
      await fs.access(filePath)
    } catch {
      // If file doesn't exist, create it with initial data
      const initialData = {
        items: [
          {
            id: 1,
            title: "Meals for Moms",
            category: "drives",
            images: ["/assets/img/portfolio/MFM.jpg"],
            link: "https://example.com/meals-for-moms"
          },
          {
            id: 2,
            title: "Used Book Sale",
            category: "fundraisers",
            images: ["/assets/img/portfolio/UB-1.jpg"],
            link: "https://example.com/used-book-sale"
          },
          {
            id: 3,
            title: "Letters of Love for Elders",
            category: "special",
            images: ["/assets/img/portfolio/LL-1.jpg"],
            link: "https://example.com/letters-of-love"
          }
        ]
      }
      await fs.writeFile(filePath, JSON.stringify(initialData, null, 2))
      return NextResponse.json(initialData)
    }

    // Read the file
    const fileContents = await fs.readFile(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error in GET:', error)
    return NextResponse.json({ error: 'Failed to read portfolio data', details: error }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const filePath = path.join(process.cwd(), 'app', 'offerings', 'portfolio.json')
    const newItem = await request.json()
    
    let data
    try {
      // Read existing data
      const fileContents = await fs.readFile(filePath, 'utf8')
      data = JSON.parse(fileContents)
    } catch {
      // If file doesn't exist, initialize with empty items array
      data = { items: [] }
    }
    
    // Add new item
    data.items.push(newItem)
    
    // Write updated data back to file
    await fs.writeFile(filePath, JSON.stringify(data, null, 2))
    
    return NextResponse.json(newItem)
  } catch (error) {
    console.error('Error in POST:', error)
    return NextResponse.json({ error: 'Failed to add portfolio item', details: error }, { status: 500 })
  }
}