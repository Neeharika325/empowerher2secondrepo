function countCategories(categories) {
    const categoryCount=categories.reduce((acc,category)=>{
        if (acc[category]) {
            acc[category]++;
        }else{
            acc[category] = 1;
        }
        return acc;
     } ,{});
     console.log("Category Count:,categoryCount");

     const sortedCategories=Object.entries(categoryCount)
                 .sort((a,b) => b[1] - a[1])
                 .map(entry=>entry[0]);
                 console.log("Sorted Categories:",sortedCategories);
                 return {
                    categoryCount,sortedCategories
                 };
    }
    const categories=
        ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
        countCategories(categories);
    