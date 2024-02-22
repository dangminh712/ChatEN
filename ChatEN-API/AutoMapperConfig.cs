using AutoMapper;
using ChatEN.Models.Entity;

namespace ChatEN
{
    public class AutoMapperConfig : Profile
    {
        public AutoMapperConfig()
        {
            CreateMap<Models.Entity.account, Models.Domain.accountDomain>()
            .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.Username))
            .ForMember(dest => dest.Islock, opt => opt.MapFrom(src => src.Islock))
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
            .ForMember(dest => dest.Personid, opt => opt.MapFrom(src => src.Personid)).ReverseMap();
            CreateMap<Models.Entity.vocabulary, Models.DTO.wordDTO>().ReverseMap();
            CreateMap<Models.Entity.favourite, Models.Domain.FavouriteDomain>().ReverseMap();
            CreateMap<Models.Entity.favourite, Models.Domain.Vocabulary>()
                .ForMember(dest => dest.WordID, opt => opt.MapFrom(src => src.vocabulary.WordID))
                .ForMember(dest => dest.Word, opt => opt.MapFrom(src => src.vocabulary.Word))
                .ForMember(dest => dest.mean, opt => opt.MapFrom(src => src.vocabulary.mean))
                .ReverseMap();
            CreateMap<Models.Entity.favourite, Models.DTO.favouriteDTO>().ReverseMap();
            CreateMap<Models.Entity.Course, Models.Domain.CourseDomain>().ReverseMap();
            CreateMap<Models.Entity.MyFlip, Models.DTO.MyFlipDTO>().ReverseMap();
            CreateMap<Models.Entity.MyCourse, Models.Domain.SaleDomain>()
                .ForMember(dest => dest.course, opt => opt.MapFrom(src => src.course)).ReverseMap();
            CreateMap<Models.Entity.MyFlip, Models.DTO.MyFlipList>()
                 .ForMember(dest => dest.Word, opt => opt.MapFrom(src => src.word))
                .ForMember(dest => dest.WordID, opt => opt.MapFrom(src => src.ID))
                .ForMember(dest => dest.mean, opt => opt.MapFrom(src => src.mean))
                .ReverseMap();
            CreateMap<Models.Entity.Course, Models.Domain.DetailCourse>().ReverseMap();
        }
    }
}
