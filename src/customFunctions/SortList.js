export default function SortList(list) {
    return list.sort((firstValue, secondValue) =>
        firstValue.title.localeCompare(secondValue.title)
    );
}
