import {IReviewForm, IReviewSentResponse} from "@/components/ReviewForm/ReviewForm.interface";
import {API} from "@/app/api";

export async function review(
    formData: IReviewForm,
    productId: string
): Promise<IReviewSentResponse> {
    const res = await fetch(API.review.createDemo, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, productId }),
    });

    return await res.json();
}