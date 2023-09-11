import { useCallback, useState } from "react";
import {Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn,
Specifics } from "../../components";
import useFetch from "../../hooks/useFetch";
import { COLOR, icons, SIZES } from "../../constants";

const JobDetails = ({ navigation, route }) => {
    const params = useSearchParams();
    const router = useRoute();

    const {data, isLoading, error, refetch} = useFetch('job-details', {job_id: params.id});

    return (
        <Text>JobDetails</Text>
    )
}

export default JobDetails;