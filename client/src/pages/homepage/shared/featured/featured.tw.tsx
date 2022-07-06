import tw from 'twin.macro';

export const FeaturedContainer = tw.div`
    flex justify-between w-screen max-w-5xl z-[1]
`;

export const FeaturedItemContainer = tw.div`
    overflow-hidden rounded-lg relative text-white h-[251px]
`;

export const FeaturedImage = tw.img`
    w-[19vw] h-[39vh] object-cover
`;

export const FeaturedTitles = tw.div`
    absolute bottom-[19px] left-[19px]
`;

export const FeaturedTitleBig = tw.h1``;

export const FeaturedTitleSmall = tw.h3``;
