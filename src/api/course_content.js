async function getCoursesContent() {
  try {
    const response = await fetch(
      'https://skyfitnesspro-virtual-fitness-default-rtdb.europe-west1.firebasedatabase.app/.json'
    );

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    // ✅ call response.json() here
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export default getCoursesContent;
