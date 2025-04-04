import matplotlib.pyplot as plt
import numpy as np
import os

def create_growth_chart(output_path="img/growth-chart.jpg"):
    """Create a growth chart mimicking the reference image"""
    # Create figure with black background
    plt.figure(figsize=(8, 6), facecolor='black')
    ax = plt.subplot(111)
    ax.set_facecolor('#111111')
    
    # Create data for an upward trend with some fluctuations
    x = np.array([0, 1, 2, 3, 4, 5, 6, 7])
    y = np.array([10, 7, 8, 5, 4, 3, 1, 0.5])  # Inverted to make it go up when plotted
    y = 10 - y  # Invert y values to make trend go upward
    
    # Create the grid
    ax.grid(color='#333333', linestyle='-', linewidth=0.5, alpha=0.3)
    
    # Plot the line with a bright green color
    plt.plot(x, y, color='#4AFF33', linewidth=3, marker='o', markersize=6)
    
    # Fill area under the line
    plt.fill_between(x, y, y.min()-1, color='#336622', alpha=0.4)
    
    # Remove axes and labels
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)
    ax.spines['bottom'].set_visible(False)
    ax.spines['left'].set_visible(False)
    plt.xticks([])
    plt.yticks([])
    
    # Create directory if it doesn't exist
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # Save the chart with tight layout and no extra whitespace
    plt.tight_layout()
    plt.savefig(output_path, bbox_inches='tight', pad_inches=0, dpi=150)
    print(f"Created growth chart: {output_path}")

if __name__ == "__main__":
    create_growth_chart() 