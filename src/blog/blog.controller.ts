import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class CreateBlogDto {
  // 字段名简介
  @ApiProperty({ description: '帖子标题' })
  // 校验参数不能为空
  @IsNotEmpty({ message: '请填写标题' })
  title: string;
  @ApiProperty({ description: '帖子详情' })
  content: string;
}
@Controller('blog')
// swagger 分组
@ApiTags('帖子')
export class BlogController {
  // 普通get请求
  @Get()
  @ApiOperation({ summary: '显示博客列表' })
  index() {
    return [
      {
        id: 1,
      },
    ];
  }
  // post请求
  @Post()
  @ApiOperation({ summary: '创建帖子' })
  create(@Body() body: CreateBlogDto) {
    return {
      success: true,
    };
  }
  // 参数
  @Get(':id')
  detail() {
    return [
      {
        id: 1,
        desc: '这是一个帖子详情',
      },
    ];
  }
}
