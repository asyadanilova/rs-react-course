import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const items = body.items;

    if (!Array.isArray(items)) {
      return NextResponse.json(
        { error: 'Invalid data format' },
        { status: 400 }
      );
    }

    const csvHeader = 'Name,Country,Website\n';
    const csvBody = items
      .map((item) => `${item.name},${item.country},${item.web_pages[0]}`)
      .join('\n');
    const csvContent = csvHeader + csvBody;

    const fileName = `${items.length}_items.csv`;

    return new NextResponse(csvContent, {
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="${fileName}"`,
      },
    });
  } catch (error) {
    console.error('Error generating CSV:', error);
    return NextResponse.json(
      { error: 'Failed to generate CSV' },
      { status: 500 }
    );
  }
}
