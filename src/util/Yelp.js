const apiKey = 'BeISaYo3Nzkx2QetIBsDXpaoPr-Ay9Omy83C7B2qq8fd86oS39lYAuNe-ArMi4ZgBNsFCZkjTrOi1MeFTgnuWArnE6hS5FvifBFQmEqhAjLBgGzKYaXlyVBgJHi-YXYx';

export const Yelp = {
    async search(term, location, sortBy) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                };
            });
        }
    }
}