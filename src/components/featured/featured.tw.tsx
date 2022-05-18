import tw from 'twin.macro';

export const FeaturedContainer = tw.div`
    flex justify-between gap-[19px] w-[90vw] max-w-[1023px] z-[1]
`;

export const FeaturedItem = tw.div`
overflow-hidden rounded-[9px] relative text-white h-[250px]
`;

export const FeaturedImage = tw.img`
    w-[19vw] h-[39vh] object-cover
`;

export const FeaturedTitles = tw.div`
    absolute bottom-[19px] left-[19px]
`;

export const FeaturedTitleBig = tw.h1``;

export const FeaturedTitleSmall = tw.h3``;
