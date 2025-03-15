const handlePhotoUpdate = async (photoData: string) => {
  try {
    const response = await fetch(`/api/properties/1234_elm_street/photo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ photoData }),
    });

    if (!response.ok) throw new Error('Failed to update photo');

    // Refresh the property data
    await refetchProperty();
  } catch (error) {
    console.error('Error updating photo:', error);
  }
};