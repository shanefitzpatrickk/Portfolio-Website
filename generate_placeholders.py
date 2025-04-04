from PIL import Image, ImageDraw, ImageFont
import os
import math
import numpy as np
import matplotlib.pyplot as plt
from PIL import ImageFilter

def draw_chart_icon(draw, x, y, width, height, color):
    # Draw a simple line chart icon
    points = [
        (x, y + height*0.7),
        (x + width*0.3, y + height*0.4),
        (x + width*0.6, y + height*0.6),
        (x + width, y + height*0.2)
    ]
    draw.line(points, fill=color, width=3)
    
    # Draw dots at data points
    for px, py in points:
        draw.ellipse((px-3, py-3, px+3, py+3), fill=color)

def create_placeholder_image(text, output_path, width=800, height=600, color='#4CAF50'):
    # Create a new image with a dark background
    image = Image.new('RGB', (width, height), '#141B24')
    draw = ImageDraw.Draw(image)
    
    # Add a subtle grid pattern
    for i in range(0, width, 20):
        draw.line([(i, 0), (i, height)], fill='#1B2634')
    for i in range(0, height, 20):
        draw.line([(0, i), (width, i)], fill='#1B2634')
    
    # Draw chart icon
    icon_width = 200
    icon_height = 100
    icon_x = (width - icon_width) // 2
    icon_y = (height - icon_height) // 2 - 50
    draw_chart_icon(draw, icon_x, icon_y, icon_width, icon_height, color)
    
    # Add project title
    try:
        font = ImageFont.truetype("arial.ttf", 40)
    except:
        font = ImageFont.load_default()
    
    # Calculate text position to center it below the icon
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    x = (width - text_width) // 2
    y = icon_y + icon_height + 30
    
    # Draw text with a shadow effect
    draw.text((x+2, y+2), text, font=font, fill='#0A0F16')
    draw.text((x, y), text, font=font, fill=color)
    
    # Save the image
    image.save(output_path)

# Create placeholder images for each project
projects = [
    ('Investment Forecasting', 'img/investor-forecasting.jpg'),
    ('Market Analysis', 'img/used-car.jpg'),
    ('Urban Economics', 'img/bikeshare.jpg'),
]

# Ensure img directory exists
os.makedirs('img', exist_ok=True)

# Generate placeholder images
for title, path in projects:
    create_placeholder_image(title, path)
    print(f"Created placeholder image: {path}")

def create_directory_if_not_exists(path):
    if not os.path.exists(path):
        os.makedirs(path)

def generate_project_graph(filename, graph_type='line'):
    # Set style for dark theme
    plt.style.use('dark_background')
    fig, ax = plt.subplots(figsize=(10, 6))
    fig.patch.set_facecolor('#1a103c')
    ax.set_facecolor('#1a103c')

    # Generate sample data
    x = np.linspace(0, 10, 100)
    
    if graph_type == 'investment':
        # Investment performance simulation with multiple portfolios
        portfolio1 = 100 * np.exp(0.1 * x + np.random.normal(0, 0.05, 100))
        portfolio2 = 100 * np.exp(0.08 * x + np.random.normal(0, 0.03, 100))
        benchmark = 100 * np.exp(0.06 * x)
        
        plt.plot(x, portfolio1, color='#8b5cf6', linewidth=2, label='Portfolio A')
        plt.plot(x, portfolio2, color='#7c3aed', linewidth=2, label='Portfolio B')
        plt.plot(x, benchmark, color='#c4b5fd', linewidth=1.5, linestyle='--', label='Benchmark')
        plt.fill_between(x, portfolio1, benchmark, color='#8b5cf6', alpha=0.1)
        plt.legend()
        
    elif graph_type == 'car_market':
        # Car price distribution and trends
        prices = np.random.normal(25000, 8000, 200)
        years = np.random.uniform(0, 10, 200)
        sizes = np.random.uniform(30, 100, 200)
        
        # Add trend line
        z = np.polyfit(years, prices, 1)
        p = np.poly1d(z)
        
        plt.scatter(years, prices, s=sizes, color='#8b5cf6', alpha=0.6)
        plt.plot(x, p(x), color='#c4b5fd', linestyle='--', linewidth=2)
        
    elif graph_type == 'bikeshare':
        # Daily usage patterns with peak hours
        hours = np.linspace(0, 24, 100)
        usage = 100 * (np.sin((hours - 8) * np.pi / 12) * 0.5 + 0.5)  # Peak at 8am and 5pm
        usage += 30 * np.sin((hours - 17) * np.pi / 12) * 0.5  # Second peak at 5pm
        usage += np.random.normal(0, 5, 100)  # Add noise
        usage = np.maximum(usage, 0)  # Ensure non-negative values
        
        plt.plot(hours, usage, color='#8b5cf6', linewidth=2)
        plt.fill_between(hours, usage, color='#8b5cf6', alpha=0.2)
        
        # Add peak markers
        peak_hours = [8, 17]  # 8am and 5pm
        peak_values = [usage[int(h * 100/24)] for h in peak_hours]
        plt.scatter(peak_hours, peak_values, color='#c4b5fd', s=100, zorder=5)

    # Customize grid
    ax.grid(True, linestyle='--', alpha=0.1)
    
    # Remove axis labels
    ax.set_xticks([])
    ax.set_yticks([])

    # Add subtle glow effect
    plt.gca().spines['bottom'].set_color('#8b5cf6')
    plt.gca().spines['top'].set_color('#8b5cf6')
    plt.gca().spines['left'].set_color('#8b5cf6')
    plt.gca().spines['right'].set_color('#8b5cf6')

    # Save with transparent background
    create_directory_if_not_exists('img')
    plt.savefig(f'img/{filename}.png', 
                dpi=300, 
                bbox_inches='tight',
                facecolor='#1a103c',
                edgecolor='none')
    plt.close()

    # Add glow effect using PIL
    img = Image.open(f'img/{filename}.png')
    img = img.convert('RGBA')
    
    # Create glow effect
    glow = Image.new('RGBA', img.size, (0, 0, 0, 0))
    for i in range(3):
        shadow = img.filter(ImageFilter.GaussianBlur(5 + i * 2))
        shadow.putalpha(25)
        glow = Image.alpha_composite(glow, shadow)
    
    # Combine original image with glow
    final = Image.alpha_composite(glow, img)
    final.save(f'img/{filename}.png', 'PNG')

def main():
    # Generate visualizations for each project
    generate_project_graph('project1', 'investment')     # For Investor Forecasting
    generate_project_graph('project2', 'car_market')     # For Used Car Analysis
    generate_project_graph('project3', 'bikeshare')      # For Bikeshare NYC

if __name__ == '__main__':
    main() 