import { Skeleton, Card, CardBody, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
    return (
        <Card borderRadius={"10px"} width={"300px"} overflow={'hidden'}>
            <Skeleton height={"200px"} />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card >
    )
}

export default GameCardSkeleton